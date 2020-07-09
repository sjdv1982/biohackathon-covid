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
        if (element == "protein_active_residues") {
            ctx[element].onchange = function() {
                res = this.value
                res = res.trim("\n").replace(/\n/g, ",")
                console.log("RES", res)
                inputElement = document.getElementById("inp_selection")
                if (inputElement === null) return
                inputElement.value = res
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
           if (inputElement === null) return
        }

        if (element == "pdb1" || element == "pdb2") {
            ctx[element].onchange = loadNGL
        }
        else if ((element == "scored") || (element == "docked")) {
            ctx[element].onchange = function() {
                const v = JSON.parse(this.value)
                inputElement.innerHTML = v
            }
        }
        else {
            if (inputElement2 === null) return
            inputElement2.innerHTML = v
            inputElement.onchange = function() {
                v = this.value
                ctx[element].set(v)
                const inputElement2 = document.getElementById(element+"_label")
                if (inputElement2 === null) return
                inputElement2.innerHTML = v
            }
        }
    })
}

function loadNGL() {
    stage.removeAllComponents()
    Promise.all([
      stage.loadFile("./pdb1",{ext:"pdb"}),
      stage.loadFile("./pdb2",{ext:"pdb"}),
    ]).then(function (l) {
        pdb1 = l[0]
        pdb2 = l[1]
        pdb1.addRepresentation("spacefill", {
            opacity: 0.2,
        })
        pdb2.addRepresentation("hyperball", {
            color: "green",
        })
        res = ctx.protein_active_residues.value
        res = res.trim("\n").replace(/\n/g, ", ")
        pdb2.addRepresentation("spacefill", {
            color: "red",
            sele: res,
        })
        pdb2.addRepresentation("cartoon", {
            color: "blue",
            sele: "backbone",
        })
        pdb2.addRepresentation( "axes", { showAxes: true, showBox: true, radius: 0.2 })
        stage.autoView()
        var pa = pdb2.structure.getPrincipalAxes();
        stage.animationControls.rotate( pa.getRotationQuaternion(), 1500 );
    })
}
loadNGL()

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
    inputElement = document.getElementById("inp_selection")
    const value = inputElement.value
    console.log("UPDATE", value)
    value2 = value.replace(/,/g, "\n").replace(/ /g,"") + "\n"
    ctx.protein_active_residues.set(value2)
    loadNGL()
}
$("body").on("click", "#btn_submit",updateResidues)