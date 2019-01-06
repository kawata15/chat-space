FactoryBot.define do
  factory :message do
    content Faker::Lorem.sentence
    image File.open(Rails.root.join("spec/fixtures/lgtm.jpg"))
    user
    group
  end
end
