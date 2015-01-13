class CreateEnrollments < ActiveRecord::Migration
  def change
    create_table :enrollments do |t|
      t.date :enrollment_date

      t.timestamps null: false

      t.references :student
      t.references :course
    end
  end
end
