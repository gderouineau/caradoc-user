![caradoc logo](http://f.cl.ly/items/2v0d202T0D3Y271K431Q/caradoc_logo.png)




## Installation

    $ npm  install caradoc-user

## Use

you need to create a entity to inherit from caradoc-user
and specify the user path in config/security.js

```js

var User = require('caradoc-user').User;

exports.User = function(firstname, lastname, otherMethods) {

    /*
     * Inherit from user
     */
    this.inheritFrom = User;
    this.inheritFrom();

    /*
     * adding method firstname
     * type Varchar(255)
     */
    this.firstname = firstname;
    this.params['firstname'] = {
        type : 'VARCHAR(255)'
    };

    /*
     * adding method lastname
     * type Varchar(255)
     */
    this.lastname = lastname;
    this.params['lastname'] = {
        type : 'VARCHAR(255)'
    };

    /*
     * adding other method
     *
     */
     this.otherMethods = otherMethods;
     this.params['otherMethods'] = {
        type : 'INT(11)',
        default : 'NULL'
     };

     ....
};


// Then in your controller

var entity = require('caradoc-entity');
var user = new entity.generate('user');
    user.username = 'username';
    user.email = 'user@mail.com';
    ...
    user.password = 'password';

    entity.persist(user); // add user to waiting list for insertion
    entity.flush(); // run the waiting list

```


## Methods

- **id** - id default null auto increment INT(11)
- **username** - user username default not null VARCHAR(255)
- **email** - email default not null VARCHAR(255)
- **password** - user password salted default not null VARCHAR(255)
- **salt** - user password salt
- **enabled** - 0 or 1 DEFAULT 1  TINYINT(1)
- **role** - user role like ROLE_MEMBER ROLE_ADMIN ... DEFAULT ROLER_MEMBER VARCHAR(255)

## License

(The MIT License)

Copyright (c) 2012-2013 g derouineau &lt;admin@caradoc.fr&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
