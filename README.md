# Landing page BPC/LOAS (GitHub Pages)

Arquivos completos com caminhos **relativos** para funcionar em `https://usuario.github.io/repo/`.

## Estrutura
```
/ (raiz)
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    ├── hero.mp4      # adicione aqui seu vídeo (MP4 H.264 + AAC)
    └── poster.jpg    # imagem de capa (opcional)
```

## Dicas importantes
- **Não use caminhos começando com `/`**; mantenha os relativos (`css/style.css`, `js/script.js`, `assets/hero.mp4`).
- Para **autoplay em mobile**, o `<video>` está com `autoplay muted playsinline loop`. Caso não toque, uma interação do usuário destrava.
- Em **Settings → Pages**, selecione `Deploy from a branch`, `Branch: main` e `Folder: /root`.
- Se você rastrear o vídeo via **Git LFS**, o GitHub Pages não serve os ponteiros de LFS. Prefira subir um MP4 menor diretamente ou use GitHub Actions para materializar os binários antes do deploy.
