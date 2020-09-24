# Interaction data: What are the key residues on the protein side?


## Sub-questions
1. Is there direct experimental data on the ssRNA-binding residues?  
2. What are the functional sites on the protein? On which of them is the ssRNA expected to bind?  
3. What is the predicted RNA interface?  
 3.a. What are the positively charged patches?  
 3.b. Are there exposed aromatics?  
 3.c. Are there conserved patches?  

## 1. Is there direct experimental data on the ssRNA-binding residues?

At the current time, there isn't any crystal structure of a nsp9 crystalized with ssRNA.

Is there a protein-ssRNA complex, homologous to Nsp9, that we can use directly?
No [23/10/2020]

## 2. Is there direct experimental data on the contacts / interfaces?

### On the nsp9 protein PDB 5HIZ [numbering in SarsCov-2, pdb 6W4B):
K10A [R11] or R106A [R112] : 1.3-fold and 2.7-fold reductions in ssDNA binding affinity  
K10A/R68A/K69A/R106A [R11/C74/R75/R112] mutant : 7.2-fold reduction  
Y82A [Y88] : 8.0-fold increase;  
[https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6096807/](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6096807/)

#### Location of those residues in 6W4B:
1. R11 (Beginning of first B-sheet; very rigid region)
2. CR74  (Strand 1 of a pair of beta strands; very rigid region)
3. Y88. Strand 2 of a pair of beta strands; very rigid region. Even the side chain seems to be very rigid, but little opportunity to make stacking interaction. The side chain seems to be well-"sandwiched" between surrounding side chains
4.  R106 [Not in the structure of 5HIZ] --> R112 (Caps the helix in 6W4B)

=> look if makes sense in the 5HIZ structure

### nsp9 protein PDB 5C94 (Infectious bronchitis virus)
https://doi.org/10.1016/j.virol.2008.10.032
K10A [R11] and K90A [K93] => 10% RNA-binding activity  
K51A [K53] => 35% / 55%  binding activity to +RNA/-RNA  
Y31A [Y33] and I95N [L98] => 80-100% binding activity  

!! that structure has an additional peptide in N-ter, that forms an artificial beta-strand.

DOI:  10.1002/pro.3150
F73G => less binding. Impairs dimerisation?


### nsp9 of HCoV-229E 
C69A => dimerisation, but no RNA binding

### Experimental details
```To determine whether this surface contributes to the ssDNA binding activity of PEDV nsp9, we introduced individual substitutions of positively charged residues, and their effects on ssDNA binding were assessed by EMSA and MST assays. In this study, residues Lys10, Arg68, Lys69, and Arg106 were mutated to alanine because of their highly positively charged potential and their exposure on the surface of the nsp9 structure. One aromatic amino acid, Tyr82, was also mutated```

nsp9 displays the same features that OB-fold proteins use to bind nucleic acids: a network of positively charged amino acids defines a positive track suitable for binding the phosphate backbone to the protein surface, whereas exposed aromatic residues might provide stacking interactions with nucleobases. These residues are conserved in all CoV nsp9 sequences (Arg-10, Lys-52, Trp-53, Arg-55, Arg-74, Phe-75, Lys-86, Tyr-87, Phe-90, Lys-92, Arg-99, and Arg-111), further suggesting that nsp9 is a nucleic acid-binding protein. In addition, two extended loops L23 and L45 display weak electron density associated with high _B_ factor values, indicating that they are flexible and/or mobile. They line the positively charged track, and they may clamp nucleic acids on the nsp9 surface after conformational change, as observed in other OB-fold proteins ([32](https://www.pnas.org/content/101/11/3792#ref-32)).
[https://www.pnas.org/content/101/11/3792](https://www.pnas.org/content/101/11/3792)

Surface plasmon resonance was used to demonstrate the function of nsp9 as a nucleic acid-binding protein. Biotinylated oligonucleotides bound to a streptavidin-coated solid support are able to bind nsp9 ([**Fig. 3**](https://www.pnas.org/content/101/11/3792#F3)[_ **A** _](https://www.pnas.org/content/101/11/3792#F3)). This function was confirmed by fluorescence experiments. As a fluorophore, nsp9 monomer has a single Trp residue (Trp-53), which is partially exposed to the solvent. The Trp-53 indole moiety is in a polar environment comprising side chains of Gln-20, Gly-66, and more remotely, Lys-52. Interactions of Trp-53 with ligand might therefore quench its fluorescence. This occurrence was indeed observed by using ssDNA and ssRNA oligonucleotides of defined sequence[2].

3. Is there other experimental data (e.g. SAXS) on the whole complex?

## Bibliography
[1] …
[2] [https://www.pnas.org/content/101/11/3792](https://www.pnas.org/content/101/11/3792)
[]
