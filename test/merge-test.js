var expect    = require("chai").expect;
const mergeSort = require('../lib/mergeSort')

describe('merge-sort', function () {
  it('can sort an array', function () {
    let unsorted = [7, 4, 9, 20, 3, 15]
    let sorted = [3, 4, 7, 9, 15, 20]
    expect(mergeSort(unsorted)[0]).to.equal(sorted[0]);
    expect(mergeSort(unsorted)[1]).to.equal(sorted[1]);
    expect(mergeSort(unsorted)[2]).to.equal(sorted[2]);
    expect(mergeSort(unsorted)[3]).to.equal(sorted[3]);
    expect(mergeSort(unsorted)[4]).to.equal(sorted[4]);
  });
  it('can sort an array with negative numbers', function () {
    let unsorted = [7, 4, -9, -20, 3, 15]
    let sorted = [-20, -9, 3, 4, 7, 15]

    expect(mergeSort(unsorted)[0]).to.equal(sorted[0]);
    expect(mergeSort(unsorted)[1]).to.equal(sorted[1]);
    expect(mergeSort(unsorted)[2]).to.equal(sorted[2]);
    expect(mergeSort(unsorted)[3]).to.equal(sorted[3]);
    expect(mergeSort(unsorted)[4]).to.equal(sorted[4]);
  });
});

