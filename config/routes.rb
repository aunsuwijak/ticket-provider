Rails.application.routes.draw do

  devise_for :organizers

  use_doorkeeper
end
