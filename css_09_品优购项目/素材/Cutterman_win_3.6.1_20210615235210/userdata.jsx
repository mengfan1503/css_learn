
var userData = Folder.userData;//Folder.commonFiles;// 
//var extensionDir = userData + '/Adobe/CEP/extensions';
var appVersion = app.version.split('.')[0];
var dir = (parseInt(appVersion) == 14)? 'CEPServiceManager4' : 'CEP';
var extensionDir = userData + '/Adobe/'+ dir +'/extensions';
var folder = new Folder(userData);
if (folder.exists) {
    folder.execute();
} else {
    alert('directory ' + extensionDir +' not exists! ');
}