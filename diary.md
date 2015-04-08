http://www.win.tue.nl/~hermanh/stack/dagstuhl08-talk.pdf

pseudo-code: http://www.fundza.com/algorithmic/space_filling/hilbert/basics/index.html

http://arxiv.org/abs/1109.2323

Axis rotation: http://www.siggraph.org/education/materials/HyperGraph/modeling/mod_tran/3drota.htm#X-Axis%20Rotation

parity: http://en.wikipedia.org/wiki/Parity_%28mathematics%29 http://en.wikipedia.org/wiki/Parity_bit
parity: the number of bits in a byte which are set to 1

http://en.wikipedia.org/wiki/Rotation_matrix

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

derived key = sequence number of a point.

3D curves: http://arxiv.org/pdf/1109.2323v1.pdf

binary decomposition: when the scanning order can be defined by `d` rules R0, ..., Rd−1, where each rule Ri divides a region
    by an axis-parallel cutting plane into two regions of equal size, to each of which ruleR(i+1) mod `d` is applied.
    requires mono curve.

According to the state diagram there are 12 states. Each state is rotation of
state 0.

example of axis rotation: https://github.com/Isinlor/Cube3D/blob/master/index.html

geometric description of Butz' implementation. https://www.cs.dal.ca/sites/default/files/technical_reports/CS-2006-07.pdf

http://people.csail.mit.edu/jaffer/Geometry/MDSFC

Am using this table to decide on m:
```
dim         index       xyz axis    m       bits
1            0-7        0<=x<2      2       3
2           0-63        2<=x<4      3       6
3           0-511       4<=x<8      4       9
4           4095        8<=x<16     5       12
5           32767       16<=x<32    6       15
6         262,144       32<=x<64    7       18
7       2,097,151       64<=x<128   8       21
8       16,777,215      128<=x<256  9       24
9       134,217,727     254<=x<512  10      27
10      1,073,741,823   512<=x<1024 11      30
```


## Presentation Notes:
"Calculation of Mappings Between One and n-dimensional Values Using the Hilbert Space-filling Curve"

The concept of a space-filling curve emerged in the 19th Century. It is originally attributed to Peano. The first graphical, or geometrical, representation of the space-filling curve is attributed to David Hilbert.

Hilbert Curves pass through every point in an n-dimensional space once and once only in some particular order according to some algorithm. As such they graphically express a mapping between one-dimensional values and the coordinates of points, regarded as multi-dimensional values, since the points are placed in a sequence according to the order in which the curve passes through them.

Hilbert Curve
A square is initially divided into 4 sub-squares which are then ordered such that any pair of consecutive sub-squares share a common edge.

The Hilbert Curve manifests a useful property in which consecutively ordered points are adjacent to each other in space.
