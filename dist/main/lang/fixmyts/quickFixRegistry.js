var addClassMember_1 = require("./quickFixes/addClassMember");
var addImportStatement_1 = require("./quickFixes/addImportStatement");
var equalsToEquals_1 = require("./quickFixes/equalsToEquals");
var quotesToQuotes_1 = require("./quickFixes/quotesToQuotes");
var quoteToTemplate_1 = require("./quickFixes/quoteToTemplate");
var stringConcatToTemplate_1 = require("./quickFixes/stringConcatToTemplate");
var typeAssertPropertyAccessToAny_1 = require("./quickFixes/typeAssertPropertyAccessToAny");
var typeAssertPropertyAccessToType_1 = require("./quickFixes/typeAssertPropertyAccessToType");
exports.allQuickFixes = [
    new addClassMember_1.default(),
    new addImportStatement_1.default(),
    new equalsToEquals_1.default(),
    new stringConcatToTemplate_1.default(),
    new quotesToQuotes_1.default(),
    new quoteToTemplate_1.default(),
    new typeAssertPropertyAccessToAny_1.default(),
    new typeAssertPropertyAccessToType_1.default(),
];
