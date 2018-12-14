## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|index: true,null: false, unique: true|
|email|string|null: false, unique: true|

### Association
- has_many :groups, through :members
- has_many :members
- has_many :messages

## groupsテーブル

|column|Type|Options|
|------|----|-------|
|name|string|index: true,null: false, unique: true|

### Association
- has_many :users, through :members
- has_many :members
- has_many :messages

## messageテーブル
|column|Type|Options|
|------|----|-------|
|body|text||
|name|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



