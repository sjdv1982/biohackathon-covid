## Tasks

## The latest task everyone

### Q1
*   compare dimerisation modes:
    * among nsp9 structures
    * between RNA-bound and RNA-unbound in another homo-dimérique protein as an exemple

### Q3
*   Test how reliable a docking is when using as much interface data from mutagenesis. Use another RNA-prot structure of similar size as a test-case. Can be on same exemple as for Q1 above or Q5 below.

### Q5
* find exemples of 2 RNA-bound structures of same protein w. different sequences => How similar are the RNA conformations ?

## Scientific tasks

**Question 1: Protein: what are the experimental unbound structures?** (Camille)


*   survey of PDB(Camille + AnnaP):
    *   nsp9 of our virus
    *   nsp9 of other viruses
*   survey of biblio (Camille + AnnaP)
*   superimpose and compare nsp9 structures of all viruses (Fatcat / pymol ...) => dom & Camille
*   compare structures of our virus’ nsp9 => Camille & Dom
*   compare dimerisation modes:
    * among nsp9 structures
    * between RNA-bound and RNA-unbound in another homo-dimérique protein as an exemple

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
* find exemples of 2 RNA-bound structures of same protein w. different sequences => How similar are the RNA conformations ?


**NEW**


*   Verify the acceptance/rejection of the hypothesis: the mutation of the protein destabilize it (thus the residues in contact appear on the completely different side of the protein and this is the reason for no binding) (cellular biology person) more information can be found in the Interaction_data_complex.md
*   (6W4B) Y88A mutation: does it make an impact on the residue 50? "Does such mutation kick sandwiched loop out of the way?" (MD person)
*   Find a way to see the difference between the dimerization binding mode (rather than differences in monomer conformation) of the SARS and COVID (more on it next week).

*   Have a look of the 6W9Q sequence, to understand which part of the sequence is coming from the COVID. And also pay attention to the Phenylalanine at the N-ter part, because it could be important for the dymerisation.

*   From Part 1 : People must read this paper (https://www.sciencedirect.com/science/article/pii/S2589004220304442?via%3Dihub) to know if you keep the 6W9Q structure or if we do not pay attention to this one.

## Technical tasks

*   Add a brief description of each cell on the status graph => Anna K + others

# Completed technical tasks (but not 100 % sure)

*   Add an option to the web form, which will allow switching between initial complex structure and the one that was obtained by the docking => Maxim (surprised that it works)
