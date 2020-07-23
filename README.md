# An interactive workflow to build 3D models of COVID-19 proteins in interaction with RNA

![alt_text](images/image1.gif "image_tooltip")


***A crucial function of coronaviruses is their interaction with RNA. Computational methods can build 3D models of this interaction. But they are static workflows that require all relevant scientific data to be specified up-front. For COVID-19, however, new scientific results come in every day. This requires a new kind of workflow: one that can be modified with new scientific data, and where new computations and visualizations can be added and adapted, interactively.***

# Project description

[//]: # (Press: Ctrl-Shift-V to compile)
### Task list:
1. Find more info about the binding for the Covid19;
2. To add nglview for PDB visualisation;
3. Cami is keep working with the articles, where mutagenesis is described for the protein-ligand complexes, looking specifically for the cases, where binding is increasing after the mutation;
4. Maxim will add an option to the web form, which will allow switching between initial complex structure and the one, that was obtained by the docking;
5. Hrishi will look into conservation of the protein residues.

### Finished:
1. Import list of questions about the binding from the google drive to the GitHub => all in the 'documentation' directiry
2. To add sliders to make it Jupyter free form => index.html/indes.js
3. Hrishi looked for the complexes, for which there are some examples of the increase/decrease of the affinity upon the mutation (F->A);

### Progress
- Protein and 3 nucleotides --> scored with attract and minimized
- The preliminary pipeline is ready

### Current Status
![alt text](https://github.com/sjdv1982/biohackathon-covid/blob/master/Current_Status.png?raw=true)

### Suggestion
- it can be useful (or will it be useful?), to have a brief description of each cell on the status graph
- it will be useful to have a screenshot of a status graph after each session
