class Group < ApplicationRecord
  has_many :members
  has_many :messages
  has_many :users, through: :members
  validates :name, presence: true

  def show_last_message                         #最新メッセージの表示
    if (last_message = messages.last).present?  #（ラストメッセ定義）.あれば値を返す
      last_message.content? ? last_message.content : '画像が投稿されています' #三項演算子でさらに分岐
    else                                        #配列が空の場合
      'まだメッセージはありません。'
    end
  end

end
