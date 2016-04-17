class AddAttributesToUsers < ActiveRecord::Migration
  def change
    add_column :users, :uid, :string, null: false
    add_column :users, :name, :string
    add_column :users, :birthdate, :date
  end
end
