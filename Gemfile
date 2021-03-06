source 'https://rubygems.org'

ruby '2.3.0'

# Backend
gem 'rails', '4.2.5'           # Latest Stable
gem 'puma'                     # Web server
gem 'pg', '~> 0.15'            # Use PostgreSQL as database
gem 'active_model_serializers' # ActiveModel::Serializer implementation and Rails hooks
gem 'carrierwave'              # Classier solution for file uploads for Rails
gem 'carrierwave-aws'          # Use the officially supported AWS-SDK library for S3 storage
gem 'mini_magick'              # A ruby wrapper for ImageMagick or GraphicsMagick command line
gem 'kaminari'                 # A Scope & Engine based, clean, powerful, customizable and sophisticated paginator for Rails 3 and 4
gem 'paranoia', '>= 2.1.5'     # Paranoia is a re-implementation of acts_as_paranoid for Rails 3 and Rails 4. Soft-deletion of records
gem 'ffaker'                   # A library for generating fake data such as names, addresses, and phone numbers.
gem 'fabrication'              # Fabrication generates objects in Ruby. Fabricators are schematics for your objects, and can be created as needed anywhere in your app or specs.
gem 'slim', '>= 3.0.6'         # Slim is a template language whose goal is reduce the syntax to the essential parts without becoming cryptic
gem 'statesman', '~> 2.0'      # An opinionated state machine library

# Admin
gem 'rails_admin',             # RailsAdmin is a Rails engine that provides an easy-to-use interface for managing your data.
    git: 'git://github.com/sferik/rails_admin'

# Authentications & Authorizations
gem 'devise'                   # Authentication solution for Rails with Warden
gem 'doorkeeper'               # OAuth 2 provider
gem 'cancancan', '>= 1.13.1'   # Continuation of CanCan, the authorization Gem for Ruby on Rails.

# Assets
gem 'jquery-rails'             # Use jquery as the JavaScript library
gem 'font-awesome-sass'        # Font-Awesome Sass gem for use in Ruby/Rails projects
gem 'sass-rails'               # SASS
gem 'i18n-js',                 # Bring the Rails I18n translations to Javascript
    git: 'git://github.com/fnando/i18n-js'
gem 'uglifier'                 # Use Uglifier as compressor for JavaScript assets
gem 'bootstrap',               # Bootstrap 4
    '~> 4.0.0.alpha3'

# Localization
gem 'phrase'

group :development do
  gem 'better_errors' # Better error page for Rails and other Rack apps
  gem 'binding_of_caller' # Retrieve the binding of a method's caller in MRI 1.9.2+
  gem 'quiet_assets' # For cleaner logs
  gem 'bullet' # help to kill N+1 queries and unused eager loading
  gem 'awesome_print' # Pretty print your Ruby objects with style -- in full color and with proper indentation
  gem 'roadie-rails' # Mailers
end

group :development, :test do
  gem 'figaro'                 # Simple Rails app configuration

  gem 'rspec-rails'            # Rails testing engine
  gem 'shoulda-matchers'       # Tests common Rails functionalities
  gem 'capybara'               # Integration testing
  gem 'poltergeist'            # Headless browser
  gem 'database_cleaner'       # Use Database Cleaner
  gem 'json_matchers'          # Validate the json returned from the API
  gem 'rspec-retry'            # Add :retry option for intermittently failing spec

  gem 'byebug'                 # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'spring'                 # Spring speeds up development by keeping your application running in the background.
  gem 'letter_opener'          # Preview mail in the browser instead of sending.
end

group :production do
  gem 'rails_12factor'         # Makes running your Rails app easier. Based on the ideas behind 12factor.net (Heroku)
  gem 'rack-timeout'           # Rack middleware which aborts requests that have been running for longer than a specified timeout.
  gem 'mandrill-api'           # A Ruby API library for the Mandrill email as a service platform.
  gem 'newrelic_rpm'           # New Relic provides you with deep information about the performance of your web application as it runs in production.
  gem 'intercom-rails'         # The easiest way to install Intercom in a Rails app
end