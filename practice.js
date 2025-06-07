function User(id, name) {
    this.id = id;
    this.name = name;
}

export function Cheatsheet() {
    // Primitives
    {
        let v_str = 'milos';
        let v_number = 15;
        let v_bigint = 123456789012345678901234567890n;
        let v_bool = true;
        let v_undefined;
        let v_null = null;
        let v_symbol = Symbol('id');
        // console.log(v_symbol); // Symbol(id)
    }

    // Classes, objects
    {
        let obj_literal = {
            id: 1,
            name: 'milos'
        };
        obj_literal.name;
        obj_literal['name'];
        obj_literal.age = 30; // Dynamically added

        let obj_with_new = new Object();

        let user_1 = new User(1, 'milos'); // From "class"
    }

    // Built ins
    {
        /*
        new Object()   // A new Object object
        new Array()    // A new Array object
        new RegExp()   // A new RegExp object
        new Function() // A new Function object
        */

        let val = Math.abs(-10);
        let date = new Date('2023-01-01');
        let regexp_literal = /select.*from users/;
    }

    // Collections
    {
        let typed_arr = new Int32Array([1, 2, 3, 4]); // Static
        let arr = ['Hyper Light Drifter', 'Astral Ascent']; // Dynamic
        let map = new Map([
            [1, new User(1, 'milos')], 
            [2, new User(2, 'john')]
        ]);
        let set = new Set([1, 1, 2, 4, 5, 2, 4, 5]);

        let v_int = 15;
    }
}

export function Practice() {

}