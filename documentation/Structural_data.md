# Nsp9

## Primary question: what is the ssRNA-bound structure of Nsp9?
## Sub-questions:
1. What is the stoichiometry?
&quot;there is a conserved dimeric form among nsp9s of all CoVs. [...] We found that three conserved residues (F73, I95, and G98) are critical for stabilizing the dimeric conformation of nsp9 (...) the dimeric nsp9 state is required for RNA binding&quot;

[https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5405427/](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5405427/)

&quot;Nsp9 dimer is required for viral growth. In vitro (...) dimerization of nsp9 was successfully disrupted with G100E, G104E, and G104V mutations. In vivo, the G100E and G104E mutations in nsp9 were lethal to efficient virus replication in cell culture (…). In contrast, the G104V mutation displayed a single example of delayed growth kinetics (…).
It would seem that during infection nsp9 must form a dimer to properly bind and orient RNA for subsequent use by the replicase machinery despite the ability of the mutants to bind RNA in vitro.
Hydrogen bonds form between the OE1 or OE2 atoms of the G104E side chain across the dimer interface with the main-chain nitrogen of Leu dimer in the crystal, the equivalent of which are not accessible in the G104V and G100E mutants.&quot;
[https://jvi.asm.org/content/83/7/3007](https://jvi.asm.org/content/83/7/3007)

On the nsp9 protein PDB 5C94, homologue of the nsp9 of cov19 (PDB 6W4B)
&quot;there is a conserved dimeric form among nsp9s of all CoVs. As such, **designing ways to disrupt nsp9 dimerization** (a potential anti‐viral strategy) may be quite straightforward
(...) we further characterized six conserved residues (F73, L86, F88, I95, G98, and G102) associated with the dimeric interface and the conserved hydrophobic region. (...) We found that three conserved residues (F73, I95, and G98) are critical for stabilizing the dimeric conformation of nsp9 (...) the dimeric nsp9 state is required for RNA binding&quot;
[https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5405427/](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5405427/)

2. What are the unbound structures?
3. What regions are flexible, what are their allowed conformations?

&quot;In addition, two extended loops L23 and L45 display weak electron density associated with high _B_ factor values, indicating that they are flexible and/or mobile.&quot;
[https://www.pnas.org/content/101/11/3792](https://www.pnas.org/content/101/11/3792)

4.a How flexible is the fold?
4.a1 Are there structures of close homologs? What are their sequence identities?
4.a2 Are there structures of remote homologs? How well do they superimpose?
4.b What are the sequence-conserved regions, patches, contacts?

## Experimental structures
Nsp9 unbound structure: 6W4B chain A,B
...

## Analysis &amp; prediction
Flexibility analysis (95 % sequence identity): [http://pdbflex.org/cluster.html#!/6w4bB/38239/6w4bA](http://pdbflex.org/cluster.html#!/6w4bB/38239/6w4bA)
...

## FATCAT Analysis
FATCAT ([http://fatcat.godziklab.org](http://fatcat.godziklab.org/)) analysis of 6W4B :
All structurally close structures are also sequence-close, so no useful information
All structures containing RNA or DNA are structurally distant -\&gt; no useful information

## Conserved Residues
Multiple alignment of nsp9 sequences from SARS-CoV National Center for Biotechnology Information (NCBI) accession no. AY291315, and several related CoVs: HCoV 229E, human CoV 229E, NCBI accession no. NP_073550; TGEV, transmissible gastroenteritis virus, NCBI accession no. NP_058423; PEDV, porcine epidemic diarrhea virus CV777, NCBI accession no. NP_598309, BCoV, bovine CoV, NCBI accession no. NP_150074; MHV, mouse hepatitis virus MHV-A59, NCBI accession no. NP_045298; and IBV, avian infectious bronchitis virus, NCBI accession no. NP_040829). 
![alt text](https://github.com/sjdv1982/biohackathon-covid/blob/master/documentation/conserved_residues2.jpg?raw=true)

Following residues are conserved in all CoV nsp9 sequences:
Arg-10, Lys-52, Trp-53, Arg-55, Arg-74, Phe-75, Lys-86, Tyr-87, Phe-90, Lys-92, Arg-99, and Arg-111

Secondary structure elements and multiple sequence alignments of IBV, HCoV‐229E, and SARS‐CoV.
![alt text](https://github.com/sjdv1982/biohackathon-covid/blob/master/documentation/conserved_residues1.png?raw=true)


## ssRNA
ssRNA is normally disordered. We will use the NAFragDB ssRNA library from the CAPSID lab.
If there is any experimental data available to narrow down that library for Nsp9 interaction, that should be listed here.


## From PDB
[https://www.rcsb.org/pdb/rest/sequenceCluster?cluster=40&structureId=6w4b.A](This will give all the sequence cluster at 40% sequence ID for a particular chain ID.)  

## Bibliography
[1] [https://www.cell.com/structure/pdf/S0969-2126(04)00026-7.pdf](https://www.cell.com/structure/pdf/S0969-2126(04)00026-7.pdf)
...
