function transform(line) {
var values = line.split(',');

var obj = new Object();
obj.tube_assembly_id = values[0];
obj.supplier = values[1];
obj.quote_date = values[2];
obj.annual_usage = values[3];
obj.min_order_quantity = values[4];
obj.bracket_pricing = values[5];
obj.quantity = values[6];
obj.cost = values[7];
var jsonString = JSON.stringify(obj);

return jsonString;
}