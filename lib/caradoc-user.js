
exports.User = function(id, userame, email, password, role) {

    this.params = {};
    this.params['EntityName'] = "User";

    this.id = null;
    this.params['id'] = {
        type :'INT(11)'
    };

    this.username = userame;
    this.params['username'] = {
        type : 'VARCHAR(255)'
    };

    this.email = email;
    this.params['email'] = {
        type : 'VARCHAR(255)'
    };

    this.password = password;
    this.params['password'] = {
        type : 'VARCHAR(255)'
    };

    this. role = role;
    this.params['role'] = {
        type : 'VARCHAR(255)'
    };



};