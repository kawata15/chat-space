class Message < ApplicationRecord
  belongs_to :user
  belongs_to :message

  validates :content, presence: true, unless: :image?
end
