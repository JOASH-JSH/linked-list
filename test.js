import LinkedList from './linked_list.js';

function testLinkedList() {
    const list = new LinkedList();

    console.log('Test append:');
    list.append(10);
    list.append(20);
    list.append(30);
    console.log(list.toString() === 'SIZE: 3 | ( 10 ) -> ( 20 ) -> ( 30 ) -> ( null )');

    console.log('\nTest prepend:');
    list.prepend(0);
    console.log(list.toString() === 'SIZE: 4 | ( 0 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> ( null )');

    console.log('\nTest size:');
    console.log(list.size() === 4);

    console.log('\nTest head and tail:');
    console.log(list.head().value === 0);
    console.log(list.tail().value === 30);

    console.log('\nTest at(index):');
    console.log(list.at(0).value === 0);
    console.log(list.at(1).value === 10);
    console.log(list.at(2).value === 20);
    console.log(list.at(3).value === 30);
    console.log(list.at(4) === null);

    console.log('\nTest pop:');
    let popped = list.pop();
    console.log(popped.value === 30);
    console.log(list.size() === 3);
    console.log(list.tail().value === 20);

    console.log('\nTest contains:');
    console.log(list.contains(20) === true);
    console.log(list.contains(40) === false);

    console.log('\nTest find:');
    console.log(list.find(10) === 1);
    console.log(list.find(30) === null);

    console.log('\nTest insertAt:');
    list.insertAt(15, 2);
    console.log(list.toString() === 'SIZE: 4 | ( 0 ) -> ( 10 ) -> ( 15 ) -> ( 20 ) -> ( null )');

    console.log('\nTest removeAt:');
    let removed = list.removeAt(2);
    console.log(removed.value === 15);
    console.log(list.size() === 3);
    console.log(list.toString() === 'SIZE: 3 | ( 0 ) -> ( 10 ) -> ( 20 ) -> ( null )');

    console.log('\nTest removeAt invalid index:');
    console.log(list.removeAt(5) === null);

    console.log('\nAll tests completed.');
}

testLinkedList();
