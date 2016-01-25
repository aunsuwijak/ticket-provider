require 'capybara'
require 'capybara/poltergeist'

ENV['TZ'] = 'UTC'
Capybara.default_host = 'http://0.0.0.0:3000'
Rails.application.routes.default_url_options[:host] = '0.0.0.0:3000'

Capybara.register_driver :poltergeist do |app|
  options = {
      js_errors: false,
      window_size: [2048, 2048],
      timeout: 30
  }
  Capybara::Poltergeist::Driver.new(app, options)
end

Capybara.server do |app, port|
  require 'rack/handler/puma'
  Rack::Handler::Puma.run(app, Port: port)
end

Capybara.javascript_driver = :poltergeist
Capybara.default_max_wait_time = 15
