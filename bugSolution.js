```javascript
//Correct use of $inc operator
db.collection.updateOne({name:"John"},{$inc:{age:1}});
```