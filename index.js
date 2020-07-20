// Create NGL Stage object
var stage = new NGL.Stage("viewport");

// Handle window resizing
window.addEventListener("resize", function (event) {
  stage.handleResize();
}, false);

ctx = connect_seamless()
ctx.self.onsharelist = function(sharelist) {
    sharelist.forEach(element => {
        if (element == "camera_view") {
            ctx[element].onchange = onLoadSavedOrientation
            return
        }
        else if (element == "protein_active_residues") {
            ctx[element].onchange = function() {
                res = this.value
                res = res.trim("\n").replace(/\n/g, ",")
                inputElement = document.getElementById("inp_selection")
                if (!(inputElement)) return
                inputElement.value = res
                loadNGL()
            }

            return
        }
        else if (element == "representation") {
            ctx[element].onchange = loadNGL
            return
        }
        else if (element == "pdb1" || element == "pdb2" || element == "docked_pdb") {
            //ctx[element].onchange = loadNGL
            ctx[element].onchange = function(){
                loadNGL()
            }
            return
        }

        if (element.indexOf(".") != -1) {
            return
        }

        var inputElement = document.getElementById(element)
        if (inputElement === null) {
           inputElement = document.getElementsByName(element)
           inputElement = inputElement[0]
           if (!(inputElement)) return
        }

        if ((element == "scored") || (element == "docked_score")) {
            ctx[element].onchange = function() {
                const v = JSON.parse(this.value)
                inputElement.innerHTML = v
            }
            return
        }

        ctx[element].onchange = function() {
            const v = JSON.parse(this.value)
            inputElement.value = v
            const inputElement2 = document.getElementById(element+"_label")
            if (!(inputElement2)) return
            inputElement2.innerHTML = v
        }
        // if (inputElement2 === null) return
        // inputElement2.innerHTML = v
        if (!(inputElement)) return
        inputElement.onchange = function() {
            v = this.value
            ctx[element].set(v)
            const inputElement2 = document.getElementById(element+"_label")
            if (!(inputElement2)) return
            inputElement2.innerHTML = v
        }
    })
}

function loadNGL() {
    stage.removeAllComponents()
    Promise.all([
      stage.loadFile("./pdb1",{ext:"pdb"}),
      stage.loadFile("./pdb2",{ext:"pdb"}),
      stage.loadFile("./docked_pdb",{ext:"pdb"}),
    ]).then(function (l) {
        initial_pdb = l[0]
        pdb2 = l[1]
        docked_pdb = l[2]
        if (1) {
            pdb1 = docked_pdb
        }
        else {
            pdb1 = initial_pdb
        }
        representation = JSON.parse(ctx.representation.value)
        representation.forEach(element => {
            const molecule = element.molecule
            const representation = element.representation
            const params = Object.assign({}, element)
            delete params.molecule
            delete params.representation
            eval(molecule).addRepresentation(representation, params)
        })
        stage.autoView()
        var pa = pdb2.structure.getPrincipalAxes();
        stage.animationControls.rotate( pa.getRotationQuaternion(), 1500 );
    })
}
// loadNGL()
$(document).ready(function(){
    loadNGL();
})

function onResetOrientation() {
    var pa = pdb2.structure.getPrincipalAxes();
    stage.animationControls.rotate( pa.getRotationQuaternion(), 1500 );
}
$("body").on("click", "#btn_reset_orientation", onResetOrientation)

function onSaveOrientation() {
    var orientation = stage.viewerControls.getOrientation().toArray();
    var orientationStr = JSON.stringify(orientation,
        function (k, v) {
          return v.toFixed ? Number(v.toFixed(2)) : v
	});
    ctx.camera_view.set(orientationStr);
    // localStorage.setItem('savedOrientation', orientationStr);
}
$("body").on("click", "#btn_save_orientation", onSaveOrientation)

function onLoadSavedOrientation() {
    const savedOrientation = JSON.parse(ctx.camera_view.value);
    stage.viewerControls.orient(savedOrientation);
    // const savedOrientationStr = localStorage.getItem('savedOrientation');
    // if (savedOrientation === null) {
	// window.alert("No saved orientation");
    // } else {
	// stage.viewerControls.orient(JSON.parse(savedOrientation));
    // }
}
$("body").on("click", "#btn_load_saved_orientation", onLoadSavedOrientation)

function updateResidues() {
    inputElement = document.getElementById("inp_selection");
    const value = inputElement.value
    value2 = value.replace(/,/g, "\n").replace(/ /g,"") + "\n"
    ctx.protein_active_residues.set(value2)
    loadNGL()
}
$("body").on("click", "#btn_submit", updateResidues)

function uploadPDBFile() {
    inputElement = document.getElementById("inp_upload_pdb");
    const file = inputElement.files[0]
    if (file === undefined) return
    file.text().then(function(text){
        ctx["protein"].set(text)
    })
}
$("body").on("click", "#btn_upload_pdb", uploadPDBFile)
