describe('BST', function() {
    var bst;
    beforeEach(function() {
        bst = new BinarySearchTree();
    });
    describe('insert', () => {
        it('should insert elements with key 8, 10, 3, 1, 6, 14 correctly', function() {
            bst.insert({
                key: 8,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 10,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 3,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 1,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 6,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 14,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 13,
                data: {
                    name: 'number',
                },
            });
            expect(bst.find(8)).toBe(true);
            expect(bst.find(10)).toBe(true);
            expect(bst.find(3)).toBe(true);
            expect(bst.find(1)).toBe(true);
            expect(bst.find(6)).toBe(true);
            expect(bst.find(14)).toBe(true);
            expect(bst.find(13)).toBe(true);
            expect(bst.find(15)).toBe(false);
        });

    });
    describe('find', () => {

        it('should find elements with key 8, 10, 3, 1, 6, 14 correctly', function() {
            bst.insert({
                key: 8,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 10,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 3,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 1,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 6,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 14,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 13,
                data: {
                    name: 'number',
                },
            });
            expect(bst.find(8)).toBe(true);
            expect(bst.find(10)).toBe(true);
            expect(bst.find(3)).toBe(true);
            expect(bst.find(1)).toBe(true);
            expect(bst.find(6)).toBe(true);
            expect(bst.find(14)).toBe(true);
            expect(bst.find(13)).toBe(true);

        });
    });
    describe('find', () => {

        it('should not find elements with key 9, 11, 26, 100, 678, 54, 27, 98, correctly', function() {
            bst.insert({
                key: 8,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 10,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 3,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 1,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 6,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 14,
                data: {
                    name: 'number',
                },
            });
            bst.insert({
                key: 13,
                data: {
                    name: 'number',
                },
            });
            expect(bst.find(9)).toBe(false);
            expect(bst.find(11)).toBe(false);
            expect(bst.find(26)).toBe(false);
            expect(bst.find(100)).toBe(false);
            expect(bst.find(678)).toBe(false);
            expect(bst.find(54)).toBe(false);
            expect(bst.find(27)).toBe(false);
            expect(bst.find(98)).toBe(false);
        });
    });

});