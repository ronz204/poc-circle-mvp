### Circle ER Diagram
Note: Paste in `dbdiagram.io`

```
Table Users {
  id serial [pk]
  name string [not null]
  email string [not null]
  password string [not null]
  biography string [not null]
  picture_url string [not null]
  created_at datetime [not null]
  updated_at datetime [not null]
}
```