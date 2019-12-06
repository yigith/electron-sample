const { app, BrowserWindow } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Tarayýcý penceresini oluþtur.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')

  // Open the DevTools.
  win.webContents.openDevTools()

  // Pencere kapatýldýðýnda ortaya çýkar.
  win.on('closed', () => {
  //Pencere nesnesini referans dýþý býrakýn,
  // uygulamanýz çoklu pencereleri destekliyorsa genellikle pencereleri
  // bir dizide saklarsýnýz, bu, ilgili öðeyi silmeniz gereken zamandýr.
    win = null
  })
}
// Bu yöntem, Electron baþlatmayý tamamladýðýnda
// ve tarayýcý pencereleri oluþturmaya hazýr olduðunda çaðrýlýr.
// Bazý API'ler sadece bu olayýn gerçekleþmesinin ardýndan kullanýlabilir.
app.on('ready', createWindow)

// Bütün pencereler kapatýldýðýnda çýkýþ yap.
app.on('window-all-closed', () => {
  // MacOS'de kullanýcý CMD + Q ile çýkana dek uygulamalarýn ve menü barlarýnýn
  // aktif kalmaya devam etmesi normaldir.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // MacOS'de dock'a týklandýktan sonra eðer baþka pencere yoksa
  // yeni pencere açýlmasý normaldir.
  if (win === null) {
    createWindow()
  }
})
// Bu dosyada, uygulamanýzýn özel ana iþleminin geri kalan bölümünü ekleyebilirsiniz
// Kod. Ayrýca bunlarý ayrý dosyalara koyabilir ve buradan isteyebilirsiniz.