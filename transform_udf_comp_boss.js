function transform(line) {
var values = line.split(',');

var obj = new Object();
obj.component_id = values[0];
obj.component_type_id = values[1];
obj.type = values[2];
obj.connection_type_id = values[3];
obj.outside_shape = values[4];
obj.base_type = values[5];
obj.height_over_tube = values[6];
obj.bolt_pattern_long = values[7];
obj.bolt_pattern_wide = values[8];
obj.groove = values[9];
obj.base_diameter = values[10];
obj.shoulder_diameter = values[11];
obj.unique_feature = values[12];
obj.orientation = values[13];
obj.weight = values[14];
var jsonString = JSON.stringify(obj);

return jsonString;
}