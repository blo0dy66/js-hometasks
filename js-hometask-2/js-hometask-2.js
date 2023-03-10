let marker1 = {
    color: 'black',
    capacity: 100,
    name: 'A',
    isNew: true,
    size: '0.5'
};

let marker2 = marker1;

changeSize(marker1)
console.log(marker2)

function changeSize(hi) {
    hi.isNew = false
}   