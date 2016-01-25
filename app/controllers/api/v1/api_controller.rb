class Api::V1::ApiController < ActionController::Base
  protect_from_forgery with: :null_session

  respond_to :json

  def authenticate_user!
    head :unauthorized unless current_user
  end

  def current_ability
    if organizer_signed_in?
      @current_ability ||= Ability.new(current_organizer)
    else
      @current_ability ||= Ability.new(current_user)
    end
  end

  def current_user
    return unless doorkeeper_token
    @current_user ||= User.where(id: doorkeeper_token.resource_owner_id).first
  end
end