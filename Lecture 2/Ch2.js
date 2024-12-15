// Object, Array, Tuple, Enum
//-------------------- Object --------------------//
// Defining an object with nested properties
var person = {
    firstName: "Patel",
    age: 21,
    address: {
        city: "Mumbai",
    },
};
//-------------------- Array --------------------//
// Object with array property
var personWithSkills = {
    firstName: "Patel",
    age: 21,
    skills: ["ReactJS", "NodeJS"],
};
// Simple string array
var favouriteLanguages1;
favouriteLanguages1 = ["Hindi", "English"];
// Array with flexible types using `any[]`
var favouriteLanguages2;
favouriteLanguages2 = ["Hindi", "English", 21, true];
//-------------------- Tuple --------------------//
// Object with a tuple
var personWithTuple = {
    name: "Patel",
    age: 21,
    skills: ["React", "Node"],
    product: [10, "Macbook M2"],
};
// personWithTuple.product = [10, "Macbook M2", "ExtraValue"]; // Invalid: Tuple length mismatch
// personWithTuple.product[1] = 20; // Invalid: Type mismatch
//-------------------- Enum --------------------//
// Enum declaration for roles
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_USER_ONLY"] = 2] = "READ_USER_ONLY";
})(Role || (Role = {}));
// Object using the `Role` enum
var user = {
    name: "Patel",
    age: 21,
    skills: ["React", "Node"],
    product: [10, "Macbook Air M2"],
    role: Role.READ_USER_ONLY,
};
// Role-based checks
if (user.role === Role.AUTHOR) {
    console.log("User is an Author");
}
else if (user.role === Role.ADMIN) {
    console.log("User is an Admin");
}
else if (user.role === Role.READ_USER_ONLY) {
    console.log("User has read-only access");
}
