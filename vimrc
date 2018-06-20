set tabstop=4       " number of visual spaces per TAB
set softtabstop=4   " number of spaces in tab when editing
set expandtab       " tabs are spaces
set number     
set showcmd     
set wildmenu            " visual autocomplete for command menu
set hlsearch            " highlight matches
set showmatch           " highlight matching [{()}]
set shiftwidth=4 
syntax on
set foldenable          " enable folding
set foldlevelstart=10   " open most folds by default
set cursorline " 突出显示当前行
set laststatus=2 "显示状态栏
filetype indent on  
autocmd FileType coffee,erb,html,css,scss,rb setlocal foldmethod=indent
set smartindent       
syntax enable
set shortmess+=A
execute pathogen#infect()
syntax on
filetype plugin indent on
map <C-n> :NERDTreeToggle<CR>
let g:NERDTreeWinPos = "right"
let NERDTreeMapOpenInTab='<ENTER>'
" tab
map <leader>1 :b 1<cr>
map <leader>2 :b 2<cr>
map <leader>3 :b 3<cr>
map <leader>4 :b 4<cr>
map <leader>5 :b 5<cr>
map <leader>6 :b 6<cr>
map <leader>7 :b 7<cr>
map <leader>8 :b 8<cr>
map <leader>9 :b 9<cr>
map <s-tab> :bp<cr>
nnoremap <C-T> :tabnew %:p<CR>
nnoremap <tab> :bn<cr>



" colorscheme
colorscheme molokai
set colorcolumn=0
map <F11> :let &background = ( &background == "dark"? "light" : "dark" )<CR>
hi Visual  guifg=White guibg=LightBlue gui=none
syntax on
hi Visual term=reverse cterm=reverse guibg=Grey

" emmet
"autocmd FileType html,erb,css,less,sass,scss EmmetInstall
"autocmd FileType html,erb,css,less,sass,scss imap <buffer> <expr> <tab> emmet#expandAbbrIntelligent("\<tab>")
let g:user_emmet_leader_key='<C-A-S-Z>'
imap   <C-y>   <plug>(emmet-expand-abbr)
nmap   <C-y>   <plug>(emmet-expand-abbr)
vmap   <C-y>   <plug>(emmet-expand-abbr)


set cmdheight=1             " 设定命令行的行数为 1
set laststatus=2

set statusline=%F%m%r\ \|\ %{&ff},%{\"[\".(&fenc==\"\"?&enc:&fenc).((exists(\"+bomb\")\ &&\ &bomb)?\",B\":\"\").\"]\ \"},%Y\ \|%=\ %l/%L,%c\ \|\ %f
 " 设置在状态行显示的信息如下：
                            " %f    当前的文件名
                            " %F    当前全路径文件名
                            " %m    当前文件修改状态
                            " %r    当前文件是否只读
                            " %Y    当前文件类型
                            " %{&fileformat}
                            "       当前文件编码
                            " %{&fileencoding}
                            "       中文编码
                            " %b    当前光标处字符的 ASCII 码值
                            " %B    当前光标处字符的十六进制值
                            " %l    当前光标行号
                            " %c    当前光标列号
                            " %V    当前光标虚拟列号 (根据字符所占字节数计算)
                            " %p    当前行占总行数的百分比
                            " %%    百分号
                            " %L    当前文件总行数
nnoremap <C-K> :call HighlightNearCursor()<CR>
function HighlightNearCursor()
  if !exists("s:highlightcursor")
    match Todo /\k*\%#\k*/
    let s:highlightcursor=1
  else
    match None
    unlet s:highlightcursor
  endif
endfunction
