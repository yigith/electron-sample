const { app, BrowserWindow } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Taray�c� penceresini olu�tur.
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

  // Pencere kapat�ld���nda ortaya ��kar.
  win.on('closed', () => {
  //Pencere nesnesini referans d��� b�rak�n,
  // uygulaman�z �oklu pencereleri destekliyorsa genellikle pencereleri
  // bir dizide saklars�n�z, bu, ilgili ��eyi silmeniz gereken zamand�r.
    win = null
  })
}
// Bu y�ntem, Electron ba�latmay� tamamlad���nda
// ve taray�c� pencereleri olu�turmaya haz�r oldu�unda �a�r�l�r.
// Baz� API'ler sadece bu olay�n ger�ekle�mesinin ard�ndan kullan�labilir.
app.on('ready', createWindow)

// B�t�n pencereler kapat�ld���nda ��k�� yap.
app.on('window-all-closed', () => {
  // MacOS'de kullan�c� CMD + Q ile ��kana dek uygulamalar�n ve men� barlar�n�n
  // aktif kalmaya devam etmesi normaldir.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // MacOS'de dock'a t�kland�ktan sonra e�er ba�ka pencere yoksa
  // yeni pencere a��lmas� normaldir.
  if (win === null) {
    createWindow()
  }
})
// Bu dosyada, uygulaman�z�n �zel ana i�leminin geri kalan b�l�m�n� ekleyebilirsiniz
// Kod. Ayr�ca bunlar� ayr� dosyalara koyabilir ve buradan isteyebilirsiniz.