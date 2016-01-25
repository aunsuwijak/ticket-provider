class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.references :account, index: true, foreign_key: true
      t.string :name, null: false
      t.text :description
      t.string :cover_photo
      t.text :tags, array: true, default: []

      t.timestamps null: false
    end
  end
end
