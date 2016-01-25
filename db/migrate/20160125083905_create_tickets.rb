class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.references :ticket_type, index: true, foreign_key: true
      t.references :user, index: true
      t.string :zone
      t.string :row
      t.string :column
      t.decimal :price

      t.timestamps null: false
    end
  end
end
