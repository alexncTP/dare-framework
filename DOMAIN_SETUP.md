# 🌐 Configuração de Domínio Customizado

## Passo a Passo Completo

### 1. Configurar DNS do seu domínio

No seu provedor de DNS (GoDaddy, Namecheap, Cloudflare, etc.):

```
Tipo: CNAME
Nome: @ (ou deixe em branco para domínio raiz)
Valor: seu-usuario.github.io
TTL: 3600 (ou padrão)
```

**Exemplo:**
- Se seu domínio é `dareframework.com`
- Configure um CNAME apontando para `seu-usuario.github.io`

### 2. Configurar subdomínio www (opcional)

```
Tipo: CNAME
Nome: www
Valor: seu-usuario.github.io
TTL: 3600
```

### 3. Atualizar arquivo CNAME

Edite o arquivo `client/public/CNAME`:

```bash
# Substitua pelo seu domínio
echo "dareframework.com" > client/public/CNAME
```

### 4. Configurar no GitHub

1. Vá para seu repositório no GitHub
2. Settings > Pages
3. Em "Custom domain", adicione seu domínio
4. Marque "Enforce HTTPS"
5. Salve

### 5. Fazer deploy

```bash
# Use o script de deploy
./deploy.sh

# Ou manualmente
cd client
npm run build
cd ..
git add .
git commit -m "Add custom domain"
git push origin main
```

### 6. Verificar configuração

Após alguns minutos, verifique:

1. **DNS:** `dig dareframework.com` ou use ferramentas online
2. **HTTPS:** Deve funcionar automaticamente
3. **Redirecionamento:** www deve redirecionar para domínio raiz

## 🔧 Troubleshooting

### DNS não propagou
- Aguarde até 48 horas
- Use ferramentas como whatsmydns.net
- Verifique se o CNAME está correto

### HTTPS não funciona
- Aguarde alguns minutos após configurar o domínio
- Verifique se "Enforce HTTPS" está marcado no GitHub

### Erro 404
- Verifique se o arquivo CNAME está no build
- Confirme se o GitHub Pages está ativo
- Verifique se a branch gh-pages foi criada

## 📋 Checklist

- [ ] DNS configurado (CNAME para seu-usuario.github.io)
- [ ] Arquivo CNAME atualizado
- [ ] Domínio configurado no GitHub Pages
- [ ] HTTPS habilitado
- [ ] Deploy realizado
- [ ] Site funcionando

## 🌍 Exemplos de Configuração

### Cloudflare
```
Tipo: CNAME
Nome: @
Conteúdo: seu-usuario.github.io
Proxy: Desabilitado
```

### GoDaddy
```
Tipo: CNAME
Nome: @
Valor: seu-usuario.github.io
TTL: 1 hora
```

### Namecheap
```
Tipo: CNAME Record
Host: @
Valor: seu-usuario.github.io
TTL: Automatic
``` 