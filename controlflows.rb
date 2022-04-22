#control flows
#if
if 9 > 6
  print 'I really like penne vodka.'
end

#else
if 9 < 6
  print 'I really like penne vodka.'
else
  print 'I like penne vodka on pizza :)'
end

#elsif
if 9 < 6
  print 'I really like penne vodka.'
elsif 9 > 6
  print 'They should put pizza on penne vodka'
else
  print 'I like penne vodka on pizza :)'
end

#unless
hungry = false

unless hungry
  puts "I'm writing Ruby programs!"
else
  puts "Time to eat!"
  end