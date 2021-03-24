function transform(line) {
var values = line.split(',');

var obj = new Object();
obj.tube_assembly_id = values[0];
obj.component_id_1 = values[1];
obj.quantity_1 = values[2];
obj.component_id_2 = values[3];
obj.quantity_2 = values[4];
obj.component_id_3 = values[5];
obj.quantity_3 = values[6];
obj.component_id_4 = values[7];
obj.quantity_4 = values[8];
obj.component_id_5 = values[9];
obj.quantity_5 = values[10];
obj.component_id_6 = values[11];
obj.quantity_6 = values[12];
obj.component_id_7 = values[13];
obj.quantity_7 = values[14];
obj.component_id_8 = values[15];
obj.quantity_8 = values[16];
var jsonString = JSON.stringify(obj);

return jsonString;
}