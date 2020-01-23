# Lista APIn osoitteista
### Postaus (eli aloitus) voi sisältää usean vastauksen, mutta vastauksella on aina vain yksi postaus

| URI  | Metodi | Rajoitettu  | Sisältö |
| :---- | :-----| :-----: | :-----|
| /api/post  | GET | - | Hakee kaikki postaukset |
| /api/post/:id  | GET | - | Hakee IDn mukaisen postauksen |
| /api/post/reply  | GET | - | Hakee kaikki vastaukset |
| /api/post/:id/reply  | GET | - | Hakee postauksen kaikki vastaukset |
| /api/post/reply/:id  | GET | - | Hakee IDn mukaisen vastauksen |
| /api/post  | POST | - | Lisää uuden postauksen |
| /api/post/:id  | POST | - | Lisää uuden vastauksen postaukseen |
| /api/post/:id   | DELETE | - | Merkitsee postauksen poistetuksi |
| /api/post/:id/delete  | DELETE | - | Poistaa postauksen kokonaan |
| /api/post/reply/:id   | DELETE | - | Merkitsee vastauksen poistetuksi |
| /api/post/reply/:id/delete  | DELETE | - | Poistaa vastauksen kokonaan |

