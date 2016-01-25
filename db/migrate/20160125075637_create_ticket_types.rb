class CreateTicketTypes < ActiveRecord::Migration
  def change
    create_table :ticket_types do |t|
      t.references :event, index: true, foreign_key: true
      t.string :name, null: false
      t.text :description
      t.decimal :current_price

      t.timestamps null: false
    end
  end
end
