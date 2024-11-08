var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_meenangadi_1 = new ol.format.GeoJSON();
var features_meenangadi_1 = format_meenangadi_1.readFeatures(json_meenangadi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_meenangadi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_meenangadi_1.addFeatures(features_meenangadi_1);
var lyr_meenangadi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_meenangadi_1, 
                style: style_meenangadi_1,
                popuplayertitle: "meenangadi",
                interactive: false,
                title: '<img src="styles/legend/meenangadi_1.png" /> meenangadi'
            });
var format_clip_Toddy_2 = new ol.format.GeoJSON();
var features_clip_Toddy_2 = format_clip_Toddy_2.readFeatures(json_clip_Toddy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_Toddy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Toddy_2.addFeatures(features_clip_Toddy_2);
var lyr_clip_Toddy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Toddy_2, 
                style: style_clip_Toddy_2,
                popuplayertitle: "clip_Toddy",
                interactive: false,
                title: '<img src="styles/legend/clip_Toddy_2.png" /> clip_Toddy'
            });
var format_clip_School_3 = new ol.format.GeoJSON();
var features_clip_School_3 = format_clip_School_3.readFeatures(json_clip_School_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_School_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_School_3.addFeatures(features_clip_School_3);
var lyr_clip_School_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_School_3, 
                style: style_clip_School_3,
                popuplayertitle: "clip_School",
                interactive: false,
                title: '<img src="styles/legend/clip_School_3.png" /> clip_School'
            });
var format_clip_Road1_4 = new ol.format.GeoJSON();
var features_clip_Road1_4 = format_clip_Road1_4.readFeatures(json_clip_Road1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_Road1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Road1_4.addFeatures(features_clip_Road1_4);
var lyr_clip_Road1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Road1_4, 
                style: style_clip_Road1_4,
                popuplayertitle: "clip_Road1",
                interactive: false,
                title: '<img src="styles/legend/clip_Road1_4.png" /> clip_Road1'
            });
var format_clip_PHC_5 = new ol.format.GeoJSON();
var features_clip_PHC_5 = format_clip_PHC_5.readFeatures(json_clip_PHC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_PHC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_PHC_5.addFeatures(features_clip_PHC_5);
var lyr_clip_PHC_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_PHC_5, 
                style: style_clip_PHC_5,
                popuplayertitle: "clip_PHC",
                interactive: false,
                title: '<img src="styles/legend/clip_PHC_5.png" /> clip_PHC'
            });
var format_clip_Location_6 = new ol.format.GeoJSON();
var features_clip_Location_6 = format_clip_Location_6.readFeatures(json_clip_Location_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_Location_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Location_6.addFeatures(features_clip_Location_6);
var lyr_clip_Location_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Location_6, 
                style: style_clip_Location_6,
                popuplayertitle: "clip_Location",
                interactive: false,
                title: '<img src="styles/legend/clip_Location_6.png" /> clip_Location'
            });
var format_clip_Dustbin1_7 = new ol.format.GeoJSON();
var features_clip_Dustbin1_7 = format_clip_Dustbin1_7.readFeatures(json_clip_Dustbin1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_Dustbin1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Dustbin1_7.addFeatures(features_clip_Dustbin1_7);
var lyr_clip_Dustbin1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Dustbin1_7, 
                style: style_clip_Dustbin1_7,
                popuplayertitle: "clip_Dustbin1",
                interactive: false,
                title: '<img src="styles/legend/clip_Dustbin1_7.png" /> clip_Dustbin1'
            });
var format_clip_CommunityHall1_8 = new ol.format.GeoJSON();
var features_clip_CommunityHall1_8 = format_clip_CommunityHall1_8.readFeatures(json_clip_CommunityHall1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_CommunityHall1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_CommunityHall1_8.addFeatures(features_clip_CommunityHall1_8);
var lyr_clip_CommunityHall1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_CommunityHall1_8, 
                style: style_clip_CommunityHall1_8,
                popuplayertitle: "clip_CommunityHall1",
                interactive: false,
                title: '<img src="styles/legend/clip_CommunityHall1_8.png" /> clip_CommunityHall1'
            });
var format_clip_Anganawadi1_9 = new ol.format.GeoJSON();
var features_clip_Anganawadi1_9 = format_clip_Anganawadi1_9.readFeatures(json_clip_Anganawadi1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clip_Anganawadi1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clip_Anganawadi1_9.addFeatures(features_clip_Anganawadi1_9);
var lyr_clip_Anganawadi1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clip_Anganawadi1_9, 
                style: style_clip_Anganawadi1_9,
                popuplayertitle: "clip_Anganawadi1",
                interactive: false,
                title: '<img src="styles/legend/clip_Anganawadi1_9.png" /> clip_Anganawadi1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_meenangadi_1.setVisible(true);lyr_clip_Toddy_2.setVisible(true);lyr_clip_School_3.setVisible(true);lyr_clip_Road1_4.setVisible(true);lyr_clip_PHC_5.setVisible(true);lyr_clip_Location_6.setVisible(true);lyr_clip_Dustbin1_7.setVisible(true);lyr_clip_CommunityHall1_8.setVisible(true);lyr_clip_Anganawadi1_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_meenangadi_1,lyr_clip_Toddy_2,lyr_clip_School_3,lyr_clip_Road1_4,lyr_clip_PHC_5,lyr_clip_Location_6,lyr_clip_Dustbin1_7,lyr_clip_CommunityHall1_8,lyr_clip_Anganawadi1_9];
lyr_meenangadi_1.set('fieldAliases', {'admin_leve': 'admin_leve', 'boundary': 'boundary', 'local_auth': 'local_auth', 'name': 'name', 'name_ml': 'name_ml', 'type': 'type', 'wikidata': 'wikidata', });
lyr_clip_Toddy_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Location': 'Location', });
lyr_clip_School_3.set('fieldAliases', {'Name': 'Name', 'LULC': 'LULC', 'Name2': 'Name2', 'ANU': 'ANU', });
lyr_clip_Road1_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_clip_PHC_5.set('fieldAliases', {'Name': 'Name', });
lyr_clip_Location_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', 'WARD_NO': 'WARD_NO', 'WARD_NAME': 'WARD_NAME', });
lyr_clip_Dustbin1_7.set('fieldAliases', {'Name': 'Name', 'LULC': 'LULC', 'Name2': 'Name2', });
lyr_clip_CommunityHall1_8.set('fieldAliases', {'Name': 'Name', });
lyr_clip_Anganawadi1_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Location': 'Location', 'Name1': 'Name1', });
lyr_meenangadi_1.set('fieldImages', {'admin_leve': 'TextEdit', 'boundary': 'TextEdit', 'local_auth': 'TextEdit', 'name': 'TextEdit', 'name_ml': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', });
lyr_clip_Toddy_2.set('fieldImages', {'id': '', 'Name': '', 'Location': '', });
lyr_clip_School_3.set('fieldImages', {'Name': '', 'LULC': '', 'Name2': '', 'ANU': '', });
lyr_clip_Road1_4.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_clip_PHC_5.set('fieldImages', {'Name': '', });
lyr_clip_Location_6.set('fieldImages', {'OBJECTID': '', 'name': '', 'WARD_NO': '', 'WARD_NAME': '', });
lyr_clip_Dustbin1_7.set('fieldImages', {'Name': '', 'LULC': '', 'Name2': '', });
lyr_clip_CommunityHall1_8.set('fieldImages', {'Name': '', });
lyr_clip_Anganawadi1_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Location': 'TextEdit', 'Name1': 'TextEdit', });
lyr_meenangadi_1.set('fieldLabels', {'admin_leve': 'no label', 'boundary': 'no label', 'local_auth': 'no label', 'name': 'no label', 'name_ml': 'no label', 'type': 'no label', 'wikidata': 'no label', });
lyr_clip_Toddy_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Location': 'no label', });
lyr_clip_School_3.set('fieldLabels', {'Name': 'no label', 'LULC': 'no label', 'Name2': 'no label', 'ANU': 'no label', });
lyr_clip_Road1_4.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_clip_PHC_5.set('fieldLabels', {'Name': 'no label', });
lyr_clip_Location_6.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'no label', 'WARD_NO': 'no label', 'WARD_NAME': 'no label', });
lyr_clip_Dustbin1_7.set('fieldLabels', {'Name': 'no label', 'LULC': 'no label', 'Name2': 'no label', });
lyr_clip_CommunityHall1_8.set('fieldLabels', {'Name': 'no label', });
lyr_clip_Anganawadi1_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Location': 'no label', 'Name1': 'no label', });
lyr_clip_Anganawadi1_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});