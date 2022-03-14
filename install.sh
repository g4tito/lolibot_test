pkg update && pkg upgrade
apt update && apt upgrade
bin=$PREFIX/bin
dir=$(pwd)
if [ -e $bin/node ]; then 
  echo -e "\u001b[32mYa estaba instalado nodejs!"
else 
  echo -e "\u001b[31mInstalando... \u001b[31mnodejs!"
  pkg install nodejs -y
  echo -e "\u001b[32mSe instaló nodejs!"
fi

if [ -e $bin/ffmpeg ]; then 
  echo -e "\u001b[32mYa esta instalado ffmpeg!"
else
  echo -e "\u001b[31mInstalando... \u001b[31mffmpeg!"
  pkg install ffmpeg -y
  echo -e "\u001b[32mSe instaló ffmpeg!"
fi

if [ -e $bin/magick ]; then 
  echo -e "\u001b[32mYa esta instalado imagemagick!"
else
  echo -e "\u001b[31mInstalando... \u001b[31mimagemagick!"
  pkg install imagemagick -y
  echo -e "\u001b[32mSe instaló imagemagick!"
fi

echo -e "\u001b[32mActualizando la versión de npm"
npm install -g npm@6.14.14
echo -e "\u001b[32mSe actualizó la versión de npm!"

echo -e "\u001b[33mComprobando instalación!"
check() {
  if [ -e $bin/node ]; then
    echo -e "\u001b[32mNodejs ya está instalado!"
  else
    echo -e "\u001b[31mNodejs no esta instalado!!, instalada manualmente usando `pkg install nodejs -y` o `apt install nodejs -y`"
    exit 1
  fi 

  if [ -e $bin/ffmpeg ]; then
    echo -e "\u001b[32mFfmpeg ya está instalado!" 
  else
    echo -e "\u001b[31mFfmpeg no esta instalado!!, instalada manualmente usando `pkg install ffmpeg -y` o `apt install ffmpeg -y`"
  fi 

  if [ -e $bin/magick ]; then
    echo -e "\u001b[32mImagemagick ya está instalado!" 
  else
    echo -e "\u001b[31mImagemagick no esta instalado!!, instalada manualmente usando `pkg install imagemagick -y` o `apt install imagemagick -y`"
  fi 
}

check
echo -e "\u001b[32mSe revisó todas las instalaciones!" 

echo -e "\u001b[33mInstalando y actualizando el módulo!"
if [ -e $dir/package.json ]; then
  npm install
  npm update
  echo -e "\u001b[32Se instaló y actualizó el módulo" 
else 
  echo -e "\u001b[31mError package.json!"
fi 

echo -e "\u001b[32mIniciando lolibot..."
echo -e "\u001b[32mSi encuentra un error, por favor informe en \u001b[33;1mhttps://github.com/g4tito/lolibot/issues/new?assignees=&labels=&template=bug_report.md&title="
npm run start
