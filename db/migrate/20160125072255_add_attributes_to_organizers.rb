class AddAttributesToOrganizers < ActiveRecord::Migration
  def change
    add_reference :organizers, :account, index: true, foreign_key: true
    add_column :organizers, :name, :string, null: false
    add_column :organizers, :role, :string, null: false
  end
end
