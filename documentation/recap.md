[//]: # (this file is here to track work done during sessions (to try at least))
### Session 8
##### Progress:
- Hrishi has progress on question 4 (biohackathon-covid/documentation/Question_4_fromReadme.md): several article with the mutation on the viral protein
- Hrishi has progress on question 2: he looked for some servers to predict flexible regions within the protein, did not submit any tasks yet
- Maxim has progress on question 2: he looked at the B-factor. PyMol sessions with obtained info are to be submitted

### Session 8
##### Progress:
- Max added option to switch from initial to the docked structure.
##### During the session:
- Work on the .js and displaying dock and undocked structures
- Creation of the independent instances of the pipeline works
- Some explanations about the translation-rotation, etc.
- Unknown error in dock.sh (File starting_structures does not exist) to be fixed until next week
##### Tasks:
- For the initial model, the 'load save orientation' button doesn't work after resetting. Max will look into it.
##### Suggestions:
- to mark cells, which are the initial input, on the pipeline, make them light-blue for example

### Session 7
1. Sjoerd deployed the project on RPBS platform, now it is possible to open several independent session at once (it worked on 10.07, but not any more, so now it's more like a teaser for the next session). This is done with the help of Cloudless. It allowed to launch independent instances, work at your own, share your instance with other people;
2. Cami read some articles. Nothing with the increased binding upon residues mutation yet;
3. We are in the middle making the function for loading a pdb file from the local machine to the pipeline work;
4. Currently, docking is done for the chain A of a protein and for the one ligand structure;
5. Now it's possible to see (only) the docked model in the web page.

### Session 6
Max added camera view (so we can share the camera orientation, camera view btwn users, save the view and load next time)
(http://localhost:5813/ctx/camera_view)

Buttons 'reset' 'save' 'load' were added in the down right corner of the field with the protein visualization (http://localhost:5813/ctx/index.html)

A field for the active residues added, which is synchronized between all users. Selected by one user residues (by their numbers, separated by the comma, can be highlighted using show button and used as a target for the docking).

### Session 5
Trying data-driven docking (docking with restraints).
