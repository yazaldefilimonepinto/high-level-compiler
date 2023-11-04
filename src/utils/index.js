const types = {
  NumericLiteral: 'NumericLiteral',
  StringLiteral: 'StringLiteral',
  BlockStatement: 'BlockStatement',
  ExpressionStatement: `ExpressionStatement`,
  Program: `Program`,
  VariableDeclaration: `VariableDeclaration`,
  VariableDeclarator: `VariableDeclarator`,
  Identifier: `Identifier`,
  AssignmentExpression: `AssignmentExpression`,
  CallExpression: `CallExpression`,
  BinaryExpression: `BinaryExpression`,
  LogicalExpression: `LogicalExpression`,
  UnaryExpression: `UnaryExpression`,
  IfStatement: `IfStatement`,
  WhileStatement: `WhileStatement`,
  FunctionDeclaration: `FunctionDeclaration`,
  ReturnStatement: `ReturnStatement`,
  YieldExpression: `YieldExpression`,
  ArrayExpression: `ArrayExpression`,
  MemberExpression: `MemberExpression`,
  ObjectExpression: `ObjectExpression`,
  ObjectProperty: `ObjectProperty`,
  ObjectPattern: `ObjectPattern`,
  TryStatement: `TryStatement`,
  ThrowStatement: `ThrowStatement`,
  CatchClause: `CatchClause`,
  AwaitExpression: `AwaitExpression`,
  ThisExpression: `ThisExpression`,
};
const internalType = {
  spawn: `spawn`,
  sleep: `sleep`,
  NextMath: `NextMath`,
};
module.exports = { types, internalType };
