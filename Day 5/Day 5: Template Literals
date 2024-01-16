/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */

function sides(literals, ...expressions) {
    const s1 = expressions[0],s2 =expressions[1];
    let P = (s2+Math.sqrt((s2*s2)-(16*s1)))/4;
    let A = (s2-Math.sqrt((s2*s2)-(16*s1)))/4; 
    // console.log(A);
    // console.log(P);
    return [A,P];
}
