FactoryGirl.define do
  factory :user do
    login 'login'
    sequence(:email) { |i| "user#{i}@example.org" }
    password 'password'
    confirmed_at DateTime.current
  end
end
