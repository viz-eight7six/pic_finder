class CreateDictionaries < ActiveRecord::Migration[5.0]
  def change
    create_table :dictionaries do |t|
      t.string :word

      t.timestamps
    end
    add_index(:dictionaries, :word)
  end
end
