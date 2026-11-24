# $bog_dock

Панель приложений, наследник `$giper_web_bar`. Встраивается в любое приложение через iframe и не добавляет Базу в его бандл.

```tree
<= Dock $bog_dock_frame
	query <= query
```

`query` подставляется в адреса приложений вместо `{query}`.

- `bog/dock/bar` панель
- `bog/dock/frame` встраивание
- `bog/dock/demo` демка
