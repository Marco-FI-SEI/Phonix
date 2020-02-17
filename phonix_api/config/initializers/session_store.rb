# Declaring use of cookies for sessions and cookie config

# TODO - configure domain before deployment
if Rails.env.production?
  Rails.application.config.session_store :cookie_store, key: "phonix", domain: "example.com"
else
  Rails.application.config.session_store :cookie_store, key: "phonix"
end
