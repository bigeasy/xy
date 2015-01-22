the function convertPointToDistance requires 'height' to be a power of 2. Looking into ways to rewrite that, or determine if a rewrite is necessary.

http://www.win.tue.nl/~hermanh/stack/dagstuhl08-talk.pdf

pseudo-code: http://www.fundza.com/algorithmic/space_filling/hilbert/basics/index.html

http://arxiv.org/abs/1109.2323

Axis rotation: http://www.siggraph.org/education/materials/HyperGraph/modeling/mod_tran/3drota.htm#X-Axis%20Rotation

parity: http://en.wikipedia.org/wiki/Parity_%28mathematics%29 http://en.wikipedia.org/wiki/Parity_bit

Want to express axis rotations internally without creating a point object.
or perhaps use one internally but return an array.

move Point to own module for reuse in Voronoi diagram calculator and r-tree

http://en.wikipedia.org/wiki/Rotation_matrix

figure out how to keep track of rotations so we can unrotate.

interesting hilbert implementation. https://github.com/ryan-williams/hilbert-js

2D encoding algorithm:
Outline of the Method

To encode from index to coordinates:
"Unpack" the index into a list of h D-bit ints (called "index chunks").
h will be the number of levels of recursion (in our case the number of times to loop); from this calculate the orientation of the overall cube.
Then, for each index chunk, starting at the most- significant,
Use a modified Gray code to convert the index chunk into a D-bit "coordinate chunk" with one bit destined for each of the D coordinates;
Calculate the start and end corners for the child cube to which the indexed point belongs;
Loop to do the child cube.
Finally,
"Pack" the output coordinates by redistributing the D bits from each of h coordinate chunks into D ints, each with h bits.
Decoding is very similar, except that at each stage we Gray- decode D index bits from coordinate bits. At that point the decoder has the same information the encoder uses to calculate the orientation of the child cube for the next stage.

N-dimensional mapping. http://www.dcs.bbk.ac.uk/~jkl/pubs/JL1_00a.pdf

more spatial indexing info. http://blog.notdot.net/2009/11/Damn-Cool-Algorithms-Spatial-indexing-with-Quadtrees-and-Hilbert-Curves

hilbert curve scheduling. http://en.wikipedia.org/wiki/Hilbert_curve_scheduling
