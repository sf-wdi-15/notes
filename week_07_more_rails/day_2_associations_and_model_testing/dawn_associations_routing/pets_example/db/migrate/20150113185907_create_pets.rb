class CreatePets < ActiveRecord::Migration
  def change
    create_table :pets do |t|
      t.string :name
      t.string :type

      t.timestamps null: false

      # Creating foreign key for pets table
      t.references :owner
    end
  end
end
