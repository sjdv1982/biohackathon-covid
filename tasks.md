## Tasks

## The latest task everyone


Get acquainted with new information, presented by Hrishi [here](https://github.com/sjdv1982/biohackathon-covid/blob/master/documentation/Question_4_fromReadme.md)

## Scientific tasks

**Question 1: Protein: what are the experimental unbound structures?** (Camille)


*   survey of PDB(Camille + AnnaP):
    *   nsp9 of our virus
    *   nsp9 of other viruses
*   survey of biblio (Camille + AnnaP)
*   superimpose and compare nsp9 structures of all viruses (Fatcat / pymol ...) => dom & Camille
*   compare structures of our virus’ nsp9 => Camille & Dom

**Question 2: Protein: What regions are flexible (prediction or experiment)? What are their allowed conformations?** (Hrishi)



*   from superposition of nsp9: identify flexible regions: what conformational variability for a given nsp9 protein? => dom & Camille
*   look at B-fact (make color figure) => Maxim (progress, session9)
*   servers to predict flexible regions => (Hrishi) (progress, session9)
*   sidechains repacking (SCWRL?) => (Hrishi)
*   MD => Julie


**Question 3: what do RNA interface prediction programs predict as the binding site on the protein? How does this relate to conservation, positive charge, aromatics?** (Isaure)



*   visualise the conserved residues identified in bibliography : check if the conserved residues form a patch on the protein surface?  => dom
*   check in bibliography which servers for prediction of RNA-binding residues/patches are suitable for ssRNA (look at training set) (progress, session9)
*   test webserver on known ssRNA-protein structures
*   run few servers  (ex: iPNHOT, 2020), create consensus prediction

**Question 4: what RNA binding experiments have been performed with Nsp9, and what RNA sequences were being used? How long were they, and what was the composition?**(Anna P?)



*   survey and analyse of biblio (all nsp9 proteins) => (Hrishi, Antoine & Anna P) ([progress](https://github.com/sjdv1982/biohackathon-covid/blob/master/documentation/Question_4_fromReadme.md), session9)
*   look for servers that predict the RNA sequence-binding preference of a protein
*   test those servers on known complexes with ssRNA

**Question 5: What parts of the viral genome are expected to be single-stranded?**(Antoine)



*   run RNA secondary predictions tools (like ViennaRNA) => Antoine
*   bibliography survey : e.g. chemical probes => Antoine
*   _list of web servers_
*   _find test cases RNA structures, test some of the web servers (if not enough tests described in the webserver paper)_

**NEW**



*   Verify the acceptance/rejection of the hypothesis: the mutation of the protein destabilize it (thus the residues in contact appear on the completely different side of the protein and this is the reason for no binding) (cellular biology person) more information can be found in the Interaction_data_complex.md
*   (6W4B) Y88A mutation: does it make an impact on the residue 50? "Does such mutation kick sandwiched loop out of the way?" (MD person)
*   Find a way to see the difference between the dimerization binding mode (rather than differences in monomer conformation) of the SARS and COVID (more on it next week).



## Technical tasks

*   Add a brief description of each cell on the status graph => Anna K + others

# Completed technical tasks (but not 100 % sure)

*   Add an option to the web form, which will allow switching between initial complex structure and the one that was obtained by the docking => Maxim (surprised that it works)
